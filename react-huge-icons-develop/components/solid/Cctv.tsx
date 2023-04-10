import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCctv = (
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
            d='M3.5 6a1.5 1.5 0 1 0 0 3h17a1.5 1.5 0 0 0 0-3h-17Zm11.75 11.395A8.978 8.978 0 0 1 12 18a8.978 8.978 0 0 1-3.25-.605V17a3.25 3.25 0 0 1 6.5 0v.395Zm1.488-.741a4.75 4.75 0 0 0-9.476 0A9 9 0 0 1 3.055 10h17.89a9 9 0 0 1-4.207 6.654ZM13 16a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCctv);
export default ForwardRef;
