import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgViewOff = (
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
            d='M21.13 14.147a3.085 3.085 0 0 0 0-4.294C19.174 7.795 15.816 5 12 5 8.184 5 4.825 7.795 2.87 9.853a3.085 3.085 0 0 0 0 4.294C4.825 16.205 8.184 19 12 19c3.816 0 7.174-2.795 9.13-4.853ZM12 15a3 3 0 0 1-2.585-4.524l4.109 4.109A2.986 2.986 0 0 1 12 15Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 19c-3.816 0-7.175-2.795-9.13-4.853a3.085 3.085 0 0 1 0-4.294c.83-.873 1.912-1.879 3.175-2.748L3.47 4.53a.75.75 0 1 1 1.06-1.06l16 16a.75.75 0 1 1-1.06 1.06l-2.827-2.827C15.233 18.471 13.66 19 12 19Zm0-4a3 3 0 0 1-2.585-4.524l4.109 4.109A2.986 2.986 0 0 1 12 15Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M9.879 9.879a3.001 3.001 0 0 1 4.242 4.242L12 12 9.879 9.879Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgViewOff);
export default ForwardRef;
