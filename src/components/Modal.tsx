import {
  useRef, useEffect,
} from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import CommentForm from './CommentForm';
import { useSelector } from 'react-redux';
import { selectors as modalSelectors } from '@/slices/modalSlice';

export const Modal = () => {
  const ref = useRef<Element | null>(null);

  const { title, body, isOpen } = useSelector(modalSelectors);

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal');
  }, []);

  return isOpen && ref.current ? (
    createPortal(
      <motion.div
        className="modal-overlay"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={overlayVariants}
      >
        <motion.div
          className="modal-content fixed inset-0 h-full flex justify-center"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center">
            <div className="mx-10 max-w-screen-xl border-2 border-stone-200 rounded-2xl p-5 bg-white">
              <h1 className="text-3xl mb-4">{title}</h1>
              <p className="mb-4">{body}</p>
              <CommentForm />
            </div>
          </div>
        </motion.div>
      </motion.div>,
      ref.current,
    )
  ) : null;
};

export default Modal;
