import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCameraSilent = (
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
            d='M1.47 1.47a.75.75 0 0 0 0 1.06L5.94 7A4 4 0 0 0 2 11v6a4 4 0 0 0 4 4h12a4 4 0 0 0 1.605-.335l1.865 1.865a.75.75 0 1 0 1.06-1.06l-20-20a.75.75 0 0 0-1.06 0ZM9 14a3 3 0 0 1 1.4-2.539l4.14 4.139A3 3 0 0 1 9 14Zm12.665 4.605L10.061 7H18a4 4 0 0 1 4 4v6a4 4 0 0 1-.335 1.605ZM7.825 4.764l.736.736h8.106l-1.073-1.61A2 2 0 0 0 13.93 3h-3.86a2 2 0 0 0-1.664.89l-.582.874Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCameraSilent);
export default ForwardRef;
