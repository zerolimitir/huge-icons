import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgEyeDisable = (
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
            d='M3.47 4.53a.75.75 0 0 1 1.06-1.06l16 16a.75.75 0 1 1-1.06 1.06l-2.827-2.826C15.233 18.47 13.66 19 12 19c-3.816 0-7.175-2.795-9.13-4.853a3.085 3.085 0 0 1 0-4.294c.83-.873 1.912-1.879 3.175-2.748L3.47 4.53Zm5.945 5.946a3 3 0 0 0 4.109 4.109l-4.109-4.109ZM12 5c3.816 0 7.174 2.795 9.13 4.853a3.085 3.085 0 0 1 0 4.294c-.44.463-.95.963-1.522 1.46L9.413 5.414A8.633 8.633 0 0 1 12 5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEyeDisable);
export default ForwardRef;
