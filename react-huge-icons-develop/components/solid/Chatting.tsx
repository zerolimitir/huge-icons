import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChatting = (
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
            d='M10 3h1.143c3.235 0 5.947 2.287 6.669 5.364A7.16 7.16 0 0 1 18 10c0 3.866-3.07 7-6.857 7H4.286C3.023 17 2 15.955 2 14.667v-3.5C2 6.657 5.582 3 10 3Zm1.429 16h-3.37a6.764 6.764 0 0 0 4.798 2h6.857C20.977 21 22 19.955 22 18.667v-3.5a8.233 8.233 0 0 0-2.003-5.406L20 10c0 4.97-3.838 9-8.571 9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatting);
export default ForwardRef;
