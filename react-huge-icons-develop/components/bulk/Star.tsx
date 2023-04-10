import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStar = (
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
            d='M10.033 3.271a2.158 2.158 0 0 1 3.934 0l1.39 2.93c.32.673.938 1.14 1.653 1.248l3.11.47c1.799.272 2.517 2.57 1.215 3.89l-2.25 2.28a2.338 2.338 0 0 0-.631 2.02l.531 3.22c.308 1.863-1.573 3.284-3.183 2.404l-2.781-1.52a2.12 2.12 0 0 0-2.042 0l-2.781 1.52c-1.61.88-3.49-.541-3.183-2.405l.531-3.22a2.338 2.338 0 0 0-.63-2.018l-2.251-2.28C1.363 10.49 2.08 8.19 3.88 7.918l3.11-.47A2.202 2.202 0 0 0 8.641 6.2l1.39-2.93Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStar);
export default ForwardRef;
