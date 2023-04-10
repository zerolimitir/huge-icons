import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDestinationLine = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='M9 16c0 2.21-2 6-4 6s-4-3.79-4-6a4 4 0 0 1 8 0ZM22 5c0 1.123-.946 2.561-1.775 3.607-.651.82-1.841.864-2.522.069C16.892 7.729 16 6.414 16 5.209 16 3 17.343 2 19 2s3 1 3 3Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M6.5 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.225 8.607C7.055 7.56 8 6.123 8 5c0-2-1.343-3-3-3S2 3 2 5.21c0 1.204.892 2.519 1.703 3.466.68.795 1.871.75 2.522-.07ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M20 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M18.03 10.97a.75.75 0 0 1 0 1.06l-.154.155a.75.75 0 0 1-1.061-1.06l.155-.155a.75.75 0 0 1 1.06 0Zm-2.012 2.012a.75.75 0 0 1 0 1.06l-.31.31a.75.75 0 0 1-1.06-1.06l.31-.31a.75.75 0 0 1 1.06 0Zm-2.166 2.166a.75.75 0 0 1 0 1.06l-.31.31a.75.75 0 1 1-1.06-1.06l.31-.31a.75.75 0 0 1 1.06 0Zm-2.167 2.167a.75.75 0 0 1 0 1.06l-.155.155a.75.75 0 1 1-1.06-1.06l.154-.155a.75.75 0 0 1 1.061 0ZM8.25 9.5A.75.75 0 0 1 9 8.75h.214a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm2.786 0a.75.75 0 0 1 .75-.75h.428a.75.75 0 0 1 0 1.5h-.428a.75.75 0 0 1-.75-.75Zm3 0a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-.214a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDestinationLine);
export default ForwardRef;
