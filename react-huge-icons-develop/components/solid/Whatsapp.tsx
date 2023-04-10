import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWhatsapp = (
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
            d='M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-4.27-.955l-4.356.726a1 1 0 0 1-1.151-1.146l.713-4.396A9.962 9.962 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10Zm-6 2.675v.436a.889.889 0 0 1-.889.889A7.111 7.111 0 0 1 8 8.889C8 8.398 8.398 8 8.889 8h.436c.542 0 1.03.33 1.23.833l.187.466a1.08 1.08 0 0 1-.52 1.368s.222 1.11 1.111 2c.89.889 2 1.11 2 1.11a1.08 1.08 0 0 1 1.367-.519l.467.187c.503.2.833.688.833 1.23Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWhatsapp);
export default ForwardRef;
