import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGiveBlood = (
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
            d='M16.868 2.981C15.685 4.113 14 6.072 14 8.056 14 10 15.515 12 18 12c2.485 0 4-2 4-3.944 0-1.984-1.685-3.943-2.868-5.075a1.621 1.621 0 0 0-2.264 0ZM2 10.001h2l6.262 2.739a1.911 1.911 0 0 1 .757 2.906l2.714 1.72a6.001 6.001 0 0 0 2.683.634H18a2 2 0 1 1 0 4H9.889a7.999 7.999 0 0 1-3.578-.845L2 19v-9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGiveBlood);
export default ForwardRef;
