import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRepeat = (
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
            d='M5.25 12a.75.75 0 0 0 1.5 0h-1.5Zm13.043-5.707.53-.53-.53.53ZM17.53 4.47a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm.763 3.237.53.53-.53-.53Zm-1.823.763a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM18 7.75a.75.75 0 0 0 0-1.5v1.5Zm.75 4.25a.75.75 0 0 0-1.5 0h1.5ZM5.707 17.707l-.53.53.53-.53Zm.763 1.823a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-.763-3.237-.53-.53.53.53Zm1.823-.763a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM6 16.25a.75.75 0 0 0 0 1.5v-1.5ZM6.75 12v-1h-1.5v1h1.5Zm12.073-6.237L17.53 4.47l-1.06 1.06 1.293 1.293 1.06-1.06Zm-1.06 1.414L16.47 8.47l1.06 1.06 1.293-1.293-1.06-1.06ZM10 7.75h8v-1.5h-8v1.5Zm7.762-.927a.25.25 0 0 1 0 .354l1.061 1.06a1.75 1.75 0 0 0 0-2.474l-1.06 1.06ZM6.75 11A3.25 3.25 0 0 1 10 7.75v-1.5A4.75 4.75 0 0 0 5.25 11h1.5Zm10.5 1v1h1.5v-1h-1.5ZM5.177 18.237 6.47 19.53l1.06-1.06-1.293-1.293-1.06 1.06Zm1.06-1.414L7.53 15.53l-1.06-1.06-1.293 1.293 1.06 1.06ZM14 16.25H6v1.5h8v-1.5Zm-7.763.927a.25.25 0 0 1 0-.354l-1.06-1.06a1.75 1.75 0 0 0 0 2.474l1.06-1.06ZM17.25 13A3.25 3.25 0 0 1 14 16.25v1.5A4.75 4.75 0 0 0 18.75 13h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRepeat);
export default ForwardRef;
