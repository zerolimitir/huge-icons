import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAutoRotation = (
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
            d='M12.53 2.984a.75.75 0 1 0-1.06 1.061l7.07 7.071a1.25 1.25 0 0 1 0 1.768l-2.962 2.962v-1.018a.75.75 0 0 0-1.5 0v1.829c0 .966.784 1.75 1.75 1.75h1.829a.75.75 0 0 0 0-1.5h-1.018l2.962-2.963a2.75 2.75 0 0 0 0-3.889l-7.07-7.07ZM6.343 5.593a.75.75 0 1 0 0 1.5h1.018l-2.963 2.962a2.75 2.75 0 0 0 0 3.89l7.072 7.07a.75.75 0 0 0 1.06-1.06l-7.07-7.071a1.25 1.25 0 0 1 0-1.768l2.962-2.962V9.17a.75.75 0 1 0 1.5 0V7.343a1.75 1.75 0 0 0-1.75-1.75H6.343Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAutoRotation);
export default ForwardRef;
