import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMusicRectangle = (
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
            d='M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm5.75 7.003a1.25 1.25 0 0 1 1.943-1.04l2 1.334c.348.232.557.622.557 1.04v2.48a2.75 2.75 0 1 0 1.5 2.45v-4.93c0-.92-.46-1.778-1.225-2.288l-2-1.334c-1.827-1.218-4.275.092-4.275 2.288v.813a2.75 2.75 0 1 0 1.5 2.45V9.003Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMusicRectangle);
export default ForwardRef;
