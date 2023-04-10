import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFlashAuto = (
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
            d='M19.192 1.712a.75.75 0 0 0-1.384 0l-2.5 6a.75.75 0 0 0 1.384.576l.641-1.538h2.334l.64 1.538a.75.75 0 0 0 1.385-.576l-2.5-6ZM18.5 3.95l.542 1.3h-1.084l.542-1.3ZM12 2 3 13.5h5V22l9-11.5h-5V2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlashAuto);
export default ForwardRef;
