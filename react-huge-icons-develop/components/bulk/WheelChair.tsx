import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWheelChair = (
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
            d='M18.5 16H7V6h10a2 2 0 0 1 2 2v8.063a2.005 2.005 0 0 0-.5-.063Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M3.25 3A.75.75 0 0 1 4 2.25h1A2.75 2.75 0 0 1 7.75 5v10.25H18.5A2.75 2.75 0 0 1 21.25 18a.75.75 0 0 1-1.5 0 1.25 1.25 0 0 0-1.25-1.25H7a.75.75 0 0 1-.75-.75V5c0-.69-.56-1.25-1.25-1.25H4A.75.75 0 0 1 3.25 3Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M12 16a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm10.492 3.008a1.992 1.992 0 1 1-3.984 0 1.992 1.992 0 0 1 3.985 0Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWheelChair);
export default ForwardRef;
