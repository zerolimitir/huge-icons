import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWave = (
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
            d='M22.643 19.386a.75.75 0 0 1-1.029.257L19 18.074a3.25 3.25 0 0 0-3.702.249l-.33.264a4.75 4.75 0 0 1-5.934 0l-.33-.264a3.25 3.25 0 0 0-3.702-.249l-2.615 1.569a.75.75 0 0 1-.772-1.286l2.615-1.57a4.75 4.75 0 0 1 5.411.365l.33.263a3.25 3.25 0 0 0 4.06 0l.33-.263a4.75 4.75 0 0 1 5.41-.364l2.616 1.569a.75.75 0 0 1 .257 1.029Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M22.643 13.386a.75.75 0 0 1-1.029.257L19 12.074a3.25 3.25 0 0 0-3.702.249l-.33.263a4.75 4.75 0 0 1-5.934 0l-.33-.263a3.25 3.25 0 0 0-3.702-.249l-2.615 1.569a.75.75 0 0 1-.772-1.286l2.615-1.57a4.75 4.75 0 0 1 5.411.365l.33.263a3.25 3.25 0 0 0 4.06 0l.33-.263a4.75 4.75 0 0 1 5.41-.364l2.616 1.569a.75.75 0 0 1 .257 1.029Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M22.643 7.386a.75.75 0 0 1-1.029.257L19 6.074a3.25 3.25 0 0 0-3.702.249l-.33.264a4.75 4.75 0 0 1-5.934 0l-.33-.264a3.25 3.25 0 0 0-3.702-.249L2.386 7.643a.75.75 0 0 1-.772-1.286l2.615-1.57a4.75 4.75 0 0 1 5.411.365l.33.263a3.25 3.25 0 0 0 4.06 0l.33-.263a4.75 4.75 0 0 1 5.41-.364l2.616 1.569a.75.75 0 0 1 .257 1.029Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWave);
export default ForwardRef;
