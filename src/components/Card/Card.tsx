import { twMerge } from 'tailwind-merge';

export const Card = ({ 
    children,
    backside,
    className,
}: {
    children: React.ReactNode;
    backside?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={
            twMerge(
                "relative transform-style-3d bg-slate-100 rounded-2xl aspect-[2/3] box-border max-w-full max-h-full",
                className,
                )}>
            <div className='absolute w-full h-full backface-hidden'>
                {children}
            </div>
                    
            {backside && (
                <div className="absolute w-full h-full rotate-y-180 backface-hidden">
                    {backside}
                </div>
            )}
        </div>
    );
};