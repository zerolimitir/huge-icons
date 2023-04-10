import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSkype = (
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
            d='M12 20a8 8 0 0 1-7.943-8.958 5 5 0 1 1 6.986-6.986 8 8 0 0 1 8.9 8.9 5 5 0 1 1-6.986 6.986A8.092 8.092 0 0 1 12 20Zm-.5-12.75a2.75 2.75 0 0 0 0 5.5h1a1.25 1.25 0 1 1 0 2.5h-1c-.69 0-1.25-.56-1.25-1.25a.75.75 0 0 0-1.5 0 2.75 2.75 0 0 0 2.75 2.75h1a2.75 2.75 0 1 0 0-5.5h-1a1.25 1.25 0 1 1 0-2.5h1c.69 0 1.25.56 1.25 1.25a.75.75 0 0 0 1.5 0 2.75 2.75 0 0 0-2.75-2.75h-1Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSkype);
export default ForwardRef;
