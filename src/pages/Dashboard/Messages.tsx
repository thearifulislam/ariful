import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useAuth } from '../../context/AuthContext';

interface Message {
  id: string;
  senderName?: string;
  senderEmail?: string;
  sender?: string;
  email?: string;
  subject?: string;
  message?: string;
  content?: string;
  phone?: string;
  company?: string;
  isRead: boolean;
  createdAt: any;
}

const Messages = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMsg, setSelectedMsg] = useState<Message | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snap) => {
      const data: Message[] = [];
      snap.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() } as Message);
      });
      setMessages(data);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const markAsRead = async (id: string, isRead: boolean) => {
    await updateDoc(doc(db, 'messages', id), { isRead });
  };
  const deleteMessage = async (id: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this message? This action cannot be undone.');
    if (!confirmDelete) return;
    await deleteDoc(doc(db, 'messages', id));
    if (selectedMsg?.id === id) setSelectedMsg(null);
  };
  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;

  // Helper to get the best value for each field
  const getName = (msg: Message) => msg.senderName || msg.sender || 'Unknown';
  const getEmail = (msg: Message) => msg.senderEmail || msg.email || 'Unknown';
  const getSubject = (msg: Message) => msg.subject || '';
  const getMessage = (msg: Message) => msg.message || msg.content || '';
  const getPhone = (msg: Message) => msg.phone || '';
  const getCompany = (msg: Message) => msg.company || '';

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Messages</h1>
      {messages.length === 0 ? (
        <div className="text-gray-500">No messages found.</div>
      ) : (
        <ul className="space-y-4">
          {messages.map(msg => (
            <li key={msg.id} className={`p-4 rounded-lg shadow bg-white flex flex-col md:flex-row md:items-center md:justify-between ${msg.isRead ? 'opacity-60' : ''}`}>
              <div className="flex-1 min-w-0 cursor-pointer" onClick={() => setSelectedMsg(msg)}>
                <div className="font-semibold text-gray-900">Client: {getName(msg)} <span className="text-gray-400 text-sm">({getEmail(msg)})</span></div>
                {getSubject(msg) && <div className="text-blue-700 font-semibold text-sm mt-1">Subject: {getSubject(msg)}</div>}
                <div className="text-gray-700 mt-1 mb-2 line-clamp-2">{getMessage(msg)}</div>
                <div className="text-xs text-gray-400">{msg.createdAt?.toDate ? msg.createdAt.toDate().toLocaleString() : ''}</div>
              </div>
              <div className="flex gap-2 mt-2 md:mt-0 items-center">
                <button title="Copy Email" onClick={() => copyEmail(getEmail(msg))} className="p-2 rounded hover:bg-gray-100 text-gray-500" aria-label="Copy Email">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8m-8-4h8m2 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h8l4-4z" /></svg>
                </button>
                <a href={`mailto:${getEmail(msg)}`} title="Reply" className="p-2 rounded hover:bg-gray-100 text-blue-500" aria-label="Reply">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h7V6a1 1 0 011-1h6a1 1 0 011 1v12a1 1 0 01-1 1h-6a1 1 0 01-1-1v-4H3v-4z" /></svg>
                </a>
                <button onClick={() => markAsRead(msg.id, !msg.isRead)} title={msg.isRead ? 'Mark Unread' : 'Mark Read'} className="p-2 rounded hover:bg-blue-100 text-blue-700" aria-label="Mark Read/Unread">
                  {msg.isRead ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  )}
                </button>
                <button onClick={() => deleteMessage(msg.id)} title="Delete" className="p-2 rounded hover:bg-red-100 text-red-700" aria-label="Delete">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {/* Full message modal */}
      {selectedMsg && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative animate-fade-in">
            <button onClick={() => setSelectedMsg(null)} className="absolute top-2 right-2 p-2 rounded hover:bg-gray-100 text-gray-500" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h2 className="text-xl font-bold mb-2 text-blue-700">Message from {getName(selectedMsg)}</h2>
            <div className="mb-1 text-gray-600 text-sm">Email: <span className="font-mono">{getEmail(selectedMsg)}</span></div>
            {getPhone(selectedMsg) && <div className="mb-1 text-gray-600 text-sm">Phone: {getPhone(selectedMsg)}</div>}
            {getCompany(selectedMsg) && <div className="mb-1 text-gray-600 text-sm">Company: {getCompany(selectedMsg)}</div>}
            {getSubject(selectedMsg) && <div className="mb-1 text-blue-700 font-semibold text-sm">Subject: {getSubject(selectedMsg)}</div>}
            <div className="mb-1 text-gray-600 text-sm">Received: {selectedMsg.createdAt?.toDate ? selectedMsg.createdAt.toDate().toLocaleString() : ''}</div>
            <div className="mb-4 text-gray-600 text-sm">Status: {selectedMsg.isRead ? 'Read' : 'Unread'}</div>
            <div className="mb-4 text-gray-900 whitespace-pre-line">{getMessage(selectedMsg)}</div>
            <div className="flex gap-2">
              <button onClick={() => markAsRead(selectedMsg.id, !selectedMsg.isRead)} className="px-3 py-1 rounded bg-blue-100 text-blue-700 text-xs font-semibold hover:bg-blue-200">{selectedMsg.isRead ? 'Mark Unread' : 'Mark Read'}</button>
              <button onClick={() => copyEmail(getEmail(selectedMsg))} className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-xs font-semibold hover:bg-gray-200">Copy Email</button>
              <a href={`mailto:${getEmail(selectedMsg)}`} className="px-3 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold hover:bg-green-200">Reply</a>
              <button onClick={() => deleteMessage(selectedMsg.id)} className="px-3 py-1 rounded bg-red-100 text-red-700 text-xs font-semibold hover:bg-red-200">Delete</button>
            </div>
            {copied && <div className="mt-2 text-green-600 text-xs">Email copied!</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages; 