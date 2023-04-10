import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMedalNumberOne = (
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
            d='M16.25 11a.75.75 0 0 0 1.5 0h-1.5Zm-10 0a.75.75 0 0 0 1.5 0h-1.5Zm14.22.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm2.06.06a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-1 7.94a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-.06 2.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-19-9a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm.06-2.06a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm1 10.06a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-2.06-.06a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM12 13h.75a.75.75 0 0 0-1.085-.67L12 13Zm-.75 6a.75.75 0 0 0 1.5 0h-1.5Zm-.585-6.17a.75.75 0 1 0 .67 1.34l-.67-1.34ZM11 18.25a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5ZM18.25 16A6.25 6.25 0 0 1 12 22.25v1.5A7.75 7.75 0 0 0 19.75 16h-1.5ZM12 22.25A6.25 6.25 0 0 1 5.75 16h-1.5A7.75 7.75 0 0 0 12 23.75v-1.5ZM5.75 16A6.25 6.25 0 0 1 12 9.75v-1.5A7.75 7.75 0 0 0 4.25 16h1.5ZM12 9.75A6.25 6.25 0 0 1 18.25 16h1.5A7.75 7.75 0 0 0 12 8.25v1.5ZM17.75 11V5h-1.5v6h1.5ZM15 2.25H9v1.5h6v-1.5ZM6.25 5v6h1.5V5h-1.5ZM9 2.25A2.75 2.75 0 0 0 6.25 5h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM17.75 5A2.75 2.75 0 0 0 15 2.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm3.78 7.53 1-1-1.06-1.06-1 1 1.06 1.06Zm-1.06 8 1 1 1.06-1.06-1-1-1.06 1.06ZM3.53 11.47l-1-1-1.06 1.06 1 1 1.06-1.06Zm-1.06 8-1 1 1.06 1.06 1-1-1.06-1.06ZM11.25 13v6h1.5v-6h-1.5Zm.415-.67-1 .5.67 1.34 1-.5-.67-1.34ZM11 19.75h2v-1.5h-2v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMedalNumberOne);
export default ForwardRef;
