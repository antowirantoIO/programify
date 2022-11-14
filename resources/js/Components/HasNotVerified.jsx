import { __ } from '@/Libs/lang';
import { useForm } from '@inertiajs/inertia-react';
import { IconLoader, IconSend } from '@tabler/icons';
import toast from 'react-hot-toast';

export default function HasNotVerified({ auth }) {
    const { post, processing } = useForm();
    const submit = () => {
        post('/email/verification-notification', {
            preserveScroll: true,
            onSuccess: () => toast.success(__('Sent! check your email now.')),
        });
    };
    return (
        <div className='lg:pt-0 pt-16'>
            <div className='max-w-xl bg-primary-50/70 backdrop-blur border-t border-primary-300 sm:border-transparent text-black ring-1 ring-transparent sm:ring-primary-300 z-50 fixed sm:rounded-l-md bottom-0 sm:bottom-4 right-0 w-full mx-auto'>
                <div className='flex items-end justify-between p-4'>
                    <div>
                        <div>
                            <strong className='font-semibold'>{auth.user.email}</strong>
                        </div>
                        <span>{__('Verify your email address')}</span>
                    </div>
                    <button
                        onClick={submit}
                        className='font-medium flex items-center bg-primary-600 px-4 py-2 rounded-md shadow hover:bg-primary-500 text-white transition-colors'>
                        {processing ? (
                            <IconLoader stroke={1.25} className='w-5 h-5 animate-spin' />
                        ) : (
                            <IconSend stroke={1.25} className='w-5 h-5' />
                        )}

                        <span className='ml-2 hidden md:block'>{__('Resend')}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
