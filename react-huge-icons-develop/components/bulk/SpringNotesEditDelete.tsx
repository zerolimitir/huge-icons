import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpringNotesEditDelete = (
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
            fillRule='evenodd'
            d='M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M14.652 9.349a.75.75 0 0 1 0 1.06L13.06 12l1.59 1.591a.75.75 0 1 1-1.06 1.06L12 13.062l-1.591 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59-1.59-1.592a.75.75 0 0 1 1.06-1.06L12 10.939l1.591-1.59a.75.75 0 0 1 1.06 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpringNotesEditDelete);
export default ForwardRef;
