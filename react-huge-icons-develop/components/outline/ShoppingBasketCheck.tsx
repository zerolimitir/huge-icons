import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShoppingBasketCheck = (
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
            d='M18.035 6v-.75V6Zm3.882 4.808.735.15-.735-.15Zm-19.834 0 .735-.15-.735.15ZM5.965 6v.75V6ZM7.6 22v-.75.75Zm-3.882-3.192-.735.15.735-.15ZM16.4 22v.75V22Zm3.882-3.192.735.15-.735-.15ZM16.4 21.25H7.6v1.5h8.8v-1.5ZM4.453 18.658l-1.635-8-1.47.3 1.635 8 1.47-.3ZM5.965 6.75h12.07v-1.5H5.965v1.5Zm15.217 3.908-1.635 8 1.47.3 1.635-8-1.47-.3ZM18.035 6.75c2.028 0 3.56 1.883 3.147 3.908l1.47.3c.6-2.938-1.623-5.708-4.617-5.708v1.5ZM2.818 10.658C2.404 8.633 3.938 6.75 5.965 6.75v-1.5c-2.994 0-5.217 2.77-4.617 5.708l1.47-.3ZM7.6 21.25a3.222 3.222 0 0 1-3.147-2.592l-1.47.3c.45 2.203 2.375 3.792 4.617 3.792v-1.5Zm8.8 1.5c2.242 0 4.167-1.589 4.617-3.792l-1.47-.3A3.223 3.223 0 0 1 16.4 21.25v1.5Z'
        />
        <path
            fill='currentColor'
            d='M21 10.75h.75v-1.5H21v1.5ZM3 9.25h-.75v1.5H3v-1.5Zm18 0H3v1.5h18v-1.5ZM9.469 15.414a.75.75 0 0 0-.938 1.172l.938-1.172Zm6.095-.92a.75.75 0 1 0-1.128-.988l1.128.988Zm-4.811 2.908-.469.586.469-.586Zm-2.222-.816 1.753 1.402.937-1.171-1.752-1.403-.938 1.172Zm4.163 1.188 2.87-3.28-1.128-.988-2.87 3.28 1.128.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.128-.988a.25.25 0 0 1-.345.03l-.937 1.172ZM9.6 2.45a.75.75 0 1 0-1.2-.9l1.2.9Zm-4.2 3.1a.75.75 0 1 0 1.2.9l-1.2-.9Zm3-4-3 4 1.2.9 3-4-1.2-.9Zm7.2 0a.75.75 0 1 0-1.2.9l1.2-.9Zm1.8 4.9a.75.75 0 1 0 1.2-.9l-1.2.9Zm-3-4 3 4 1.2-.9-3-4-1.2.9Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasketCheck);
export default ForwardRef;
