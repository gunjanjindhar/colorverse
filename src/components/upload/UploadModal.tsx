import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Progress from '@radix-ui/react-progress';
import { X, Upload } from 'lucide-react';
import { useGradingStore } from '../../store/gradingStore';
import { LoadingAnimation } from './LoadingAnimation';

export const UploadModal = ({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [stage, setStage] = useState<'initial' | 'uploading' | 'analyzing'>('initial');
  const setGradingSession = useGradingStore(state => state.setGradingSession);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;

    setStage('uploading');
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setStage('analyzing');
          setTimeout(() => {
            setGradingSession({
              id: 'test-session',
              videoUrl: URL.createObjectURL(files[0]),
              status: 'ready'
            });
            onClose();
          }, 2000);
          return prev;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-gray-900 rounded-xl p-6">
          <Dialog.Close className="absolute top-4 right-4 text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </Dialog.Close>

          {stage === 'initial' && (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Upload Your Video</h2>
              <p className="text-gray-400 mb-8">
                Select your video file to begin the color grading process
              </p>
              <label className="block w-full p-12 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-primary transition-colors">
                <input
                  type="file"
                  className="hidden"
                  accept=".mp4,.mov,.avi"
                  onChange={handleFileSelect}
                />
                <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-gray-400">
                  Drop your video here or click to browse
                </p>
              </label>
            </div>
          )}

          {stage === 'uploading' && (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Uploading...</h2>
              <Progress.Root 
                className="h-2 bg-gray-700 rounded-full overflow-hidden w-full mb-4" 
                value={uploadProgress}
              >
                <Progress.Indicator
                  className="h-full bg-primary transition-all duration-300 ease-out"
                  style={{ width: `${uploadProgress}%` }}
                />
              </Progress.Root>
              <p className="text-gray-400">
                Uploading your video... {uploadProgress}%
              </p>
            </div>
          )}

          {stage === 'analyzing' && (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Analyzing Your Footage</h2>
              <LoadingAnimation />
              <p className="text-gray-400 mt-4">
                Scene cut detection and frame indexing in progress...
              </p>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};