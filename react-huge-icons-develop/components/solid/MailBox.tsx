import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMailBox = (
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
            d='M18 3.75c-.69 0-1.25.56-1.25 1.25v1.056A5.001 5.001 0 0 1 21 11v5a4 4 0 0 1-2.25 3.598V21a.75.75 0 0 1-1.5 0v-1.008A4.062 4.062 0 0 1 17 20h-1.25v1a.75.75 0 0 1-1.5 0v-1h-.992c.893-.872 1.442-2.055 1.442-3.357V10.57c0-1.823-.86-3.458-2.222-4.571h2.772V5A2.75 2.75 0 0 1 18 2.25h1a.75.75 0 0 1 0 1.5h-1ZM13 11v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5a5 5 0 0 1 10 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailBox);
export default ForwardRef;
