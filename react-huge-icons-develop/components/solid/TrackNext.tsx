import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrackNext = (
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
            d='M17.75 7a.75.75 0 0 0-1.5 0v3.414a2.091 2.091 0 0 0-.212-.142l-6.03-3.517C8.674 5.977 7 6.938 7 8.482v7.036c0 1.543 1.674 2.505 3.008 1.727l6.03-3.517c.075-.044.146-.091.212-.142V17a.75.75 0 0 0 1.5 0V7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackNext);
export default ForwardRef;
