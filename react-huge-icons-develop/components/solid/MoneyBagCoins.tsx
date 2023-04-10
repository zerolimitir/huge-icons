import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyBagCoins = (
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
            d='M8.398 5.25h7.204c1.163-1.57-.404-3.768-2.349-3.14l-.928.3a1.06 1.06 0 0 1-.65 0l-.928-.3c-1.945-.628-3.511 1.57-2.349 3.14Zm7.096 1.5H8.506a5.996 5.996 0 0 0-2.822 3.46l-1.25 4C3.227 18.074 6.114 22 10.161 22h.966a3.484 3.484 0 0 1-.627-2c0-.744.232-1.433.627-2A3.5 3.5 0 0 1 14 12.5h5.031l-.715-2.29a5.997 5.997 0 0 0-2.822-3.46ZM14 14a2 2 0 1 0 0 4 2 2 0 1 0 0 4h6a2 2 0 0 0 0-4 2 2 0 0 0 0-4h-6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyBagCoins);
export default ForwardRef;
