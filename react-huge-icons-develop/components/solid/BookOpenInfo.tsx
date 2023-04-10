import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookOpenInfo = (
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
            d='M3.994 3.011c2.196.248 5.137.911 7.256 2.367V20.74c-2.119-1.456-5.06-2.119-7.256-2.367C2.896 18.248 2 17.332 2 16.2V4.935c0-1.131.896-2.048 1.994-1.924Zm11.037 16.544c-.812.32-1.59.71-2.281 1.184V5.38c2.119-1.457 5.06-2.12 7.256-2.368C21.104 2.887 22 3.804 22 4.935v9.481a5 5 0 0 0-6.97 5.139ZM5.114 7.513a.75.75 0 0 0-.23 1.483c1.229.19 2.586.505 3.845.991a.75.75 0 1 0 .54-1.399c-1.385-.536-2.852-.873-4.155-1.075Zm-.856 4.627a.75.75 0 0 1 .856-.627c.66.103 1.36.24 2.068.418a.75.75 0 0 1-.366 1.455 21.193 21.193 0 0 0-1.932-.39.75.75 0 0 1-.626-.856ZM19 18.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM19 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookOpenInfo);
export default ForwardRef;
