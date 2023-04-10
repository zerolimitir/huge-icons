import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLocationUser = (
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
            d='M21 10.889C21 15.799 15.375 22 12 22s-9-6.202-9-11.111C3 5.979 7.03 2 12 2s9 3.98 9 8.889ZM17 11a4.994 4.994 0 0 1-5 5 4.994 4.994 0 0 1-5-5 5 5 0 0 1 10 0Zm-3.5-2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm1 4.5c-.382-1.217-1.157-2-2.5-2s-2.118.783-2.5 2c.81.567 1.435 1 2.5 1s1.69-.433 2.5-1Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationUser);
export default ForwardRef;
