import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgImageCircle = (
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
            d='M12 2C6.477 2 2 6.477 2 12c0 .64.06 1.266.175 1.873l2.893 1.893a3.25 3.25 0 0 0 3.838-.204l5.238-4.285a4.75 4.75 0 0 1 5.61-.298l2.236 1.464c.007-.147.01-.295.01-.443 0-5.523-4.477-10-10-10Zm0 20a10.002 10.002 0 0 1-9.108-5.865l1.355.886a4.75 4.75 0 0 0 5.609-.298l5.238-4.285a3.25 3.25 0 0 1 3.838-.204l2.848 1.864C20.816 18.613 16.803 22 12 22ZM9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgImageCircle);
export default ForwardRef;
