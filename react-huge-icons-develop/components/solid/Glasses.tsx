import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGlasses = (
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
            d='M2.25 6A3.75 3.75 0 0 1 6 2.25a.75.75 0 0 1 0 1.5A2.25 2.25 0 0 0 3.75 6v8.26a4.25 4.25 0 0 1 6.635 1.514A2.738 2.738 0 0 1 12 15.25c.604 0 1.162.194 1.615.524a4.25 4.25 0 0 1 6.635-1.514V6A2.25 2.25 0 0 0 18 3.75a.75.75 0 0 1 0-1.5A3.75 3.75 0 0 1 21.75 6v11.5a4.25 4.25 0 0 1-8.47.5h-.03a1.25 1.25 0 1 0-2.5 0h-.03a4.25 4.25 0 0 1-8.47-.5V6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlasses);
export default ForwardRef;
