import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SectionHeaderProps {
    title: string;
    onPrev: () => void;
    onNext: () => void;
    showSeeMore?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    onPrev,
    onNext,
    showSeeMore = true
}) => {
    return (
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-white">{title}</h3>
                <div className='flex items-center gap-1 text-gray-400'>
                    <ChevronLeft
                        size={16}
                        className="cursor-pointer hover:text-white"
                        onClick={onPrev}
                    />
                    <ChevronRight
                        size={16}
                        className="cursor-pointer hover:text-white"
                        onClick={onNext}
                    />
                </div>
            </div>
            {showSeeMore && (
                <div className="flex items-center gap-1 text-gray-400 text-xs font-bold cursor-pointer hover:text-white">
                    See More <ChevronRight
                        size={16}
                        className="cursor-pointer hover:text-white"
                        onClick={onNext}
                    />
                </div>
            )}
        </div>
    );
};

export default SectionHeader;
