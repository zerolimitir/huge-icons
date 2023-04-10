import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHangout = (
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
        <path fill='currentColor' d='M12 22c4.97 0 9-6.03 9-11a9 9 0 1 0-9 9v2Z' opacity={0.4} />
        <path
            fill='currentColor'
            d='M13.5 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2a1.5 1.5 0 0 1-.78 1.317c-.364.198-.72-.153-.72-.567a.75.75 0 0 0-.75-.75.75.75 0 0 1-.75-.75V10Zm-6 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2a1.5 1.5 0 0 1-.78 1.317c-.364.198-.72-.153-.72-.567a.75.75 0 0 0-.75-.75.75.75 0 0 1-.75-.75V10Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHangout);
export default ForwardRef;
