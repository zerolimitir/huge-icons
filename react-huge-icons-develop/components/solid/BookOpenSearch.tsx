import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookOpenSearch = (
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
            d='M11.25 4.378C9.131 2.922 6.19 2.26 3.994 2.011 2.896 1.887 2 2.804 2 3.935V15.2c0 1.131.896 2.048 1.994 2.172 2.196.248 5.137.911 7.256 2.367V4.38Zm1.5 15.361c.69-.474 1.47-.865 2.28-1.184A5 5 0 0 1 22 13.416v-9.48c0-1.132-.896-2.049-1.994-1.925-2.195.248-5.137.911-7.256 2.367V19.74ZM4.259 7.14a.75.75 0 0 1 .856-.626c1.303.202 2.77.54 4.156 1.075a.75.75 0 1 1-.542 1.4c-1.258-.487-2.615-.802-3.844-.992a.75.75 0 0 1-.626-.856Zm.856 3.375a.75.75 0 1 0-.23 1.482c.62.096 1.273.223 1.932.39a.75.75 0 0 0 .366-1.455 22.689 22.689 0 0 0-2.068-.417ZM17.75 17a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0ZM19 14.25a2.75 2.75 0 1 0 1.34 5.151l.63.63a.75.75 0 1 0 1.06-1.061l-.629-.63A2.75 2.75 0 0 0 19 14.25Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookOpenSearch);
export default ForwardRef;
