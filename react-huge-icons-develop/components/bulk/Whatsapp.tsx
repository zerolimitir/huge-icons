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
            d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.511.335 2.945.936 4.229l-.713 4.396a1 1 0 0 0 1.151 1.146l4.356-.726A9.96 9.96 0 0 0 12 22Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M16 15.111v-.436c0-.542-.33-1.03-.833-1.23l-.466-.187a1.08 1.08 0 0 0-1.14.215c-.165.154-.38.273-.594.199a4.358 4.358 0 0 1-1.634-1.005 4.358 4.358 0 0 1-1.005-1.634c-.074-.213.045-.429.199-.593.28-.298.375-.74.215-1.14l-.187-.467A1.325 1.325 0 0 0 9.325 8H8.89a.889.889 0 0 0-.89.889A7.111 7.111 0 0 0 15.111 16a.889.889 0 0 0 .889-.889Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWhatsapp);
export default ForwardRef;
