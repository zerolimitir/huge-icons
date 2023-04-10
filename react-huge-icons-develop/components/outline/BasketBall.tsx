import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBasketBall = (
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
            d='M17.194 12c0-2.483.978-4.736 2.57-6.398L18.68 4.565A10.716 10.716 0 0 0 15.694 12h1.5ZM12 2.75a9.221 9.221 0 0 1 6.68 2.852l1.084-1.037A10.721 10.721 0 0 0 12 1.25v1.5Zm6.68 2.852A9.216 9.216 0 0 1 21.25 12h1.5c0-2.885-1.137-5.505-2.986-7.435L18.68 5.602Zm1.084 12.796A9.216 9.216 0 0 1 17.194 12h-1.5a10.72 10.72 0 0 0 2.987 7.436l1.083-1.038ZM21.25 12a9.216 9.216 0 0 1-2.57 6.398l1.084 1.038A10.716 10.716 0 0 0 22.75 12h-1.5Zm-2.57 6.398A9.22 9.22 0 0 1 12 21.25v1.5c3.052 0 5.808-1.273 7.764-3.314l-1.083-1.038ZM4.237 5.602A9.216 9.216 0 0 1 6.806 12h1.5c0-2.885-1.138-5.505-2.987-7.435L4.236 5.602ZM2.75 12c0-2.483.977-4.736 2.57-6.398L4.235 4.565A10.716 10.716 0 0 0 1.25 12h1.5Zm2.57-6.398A9.221 9.221 0 0 1 12 2.75v-1.5a10.721 10.721 0 0 0-7.764 3.315L5.32 5.602ZM6.805 12a9.216 9.216 0 0 1-2.57 6.398l1.083 1.038A10.716 10.716 0 0 0 8.306 12h-1.5ZM12 21.25a9.221 9.221 0 0 1-6.68-2.852l-1.084 1.038A10.721 10.721 0 0 0 12 22.75v-1.5Zm-6.68-2.852A9.216 9.216 0 0 1 2.75 12h-1.5c0 2.885 1.137 5.505 2.986 7.436l1.083-1.038ZM11.25 2v20h1.5V2h-1.5ZM22 11.25H2v1.5h20v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBasketBall);
export default ForwardRef;
