import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTag = (
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
            d='m9.397 2.976.492.566-.492-.566Zm5.206 0-.492.566.492-.566Zm3 2.606.492-.566-.492.566Zm-11.206 0-.492-.566.492.566ZM18.25 8.661v9.285h1.5V8.66h-1.5ZM15 21.25H9v1.5h6v-1.5Zm-9.25-3.304V8.66h-1.5v9.285h1.5ZM6.889 6.149l3-2.607-.984-1.132-3 2.606.984 1.133Zm7.222-2.607 3 2.607.984-1.133-3-2.606-.984 1.132Zm-4.222 0a3.21 3.21 0 0 1 4.222 0l.984-1.132a4.71 4.71 0 0 0-6.19 0l.984 1.132ZM9 21.25c-1.785 0-3.25-1.47-3.25-3.304h-1.5c0 2.643 2.117 4.804 4.75 4.804v-1.5Zm9.25-3.304c0 1.834-1.465 3.304-3.25 3.304v1.5c2.633 0 4.75-2.16 4.75-4.804h-1.5Zm1.5-9.285a4.83 4.83 0 0 0-1.655-3.645l-.984 1.133A3.328 3.328 0 0 1 18.25 8.66h1.5Zm-14 0c0-.969.418-1.886 1.139-2.512l-.984-1.133A4.828 4.828 0 0 0 4.25 8.661h1.5ZM13.25 8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 8h-1.5ZM12 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 10.75v-1.5ZM10.75 8c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 8h1.5ZM12 6.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 5.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTag);
export default ForwardRef;
