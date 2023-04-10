import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookOpenFavourite = (
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
            d='M11.25 5.508C9.131 4.053 6.19 3.39 3.994 3.142 2.896 3.018 2 3.934 2 5.066V16.33c0 1.132.896 2.049 1.994 2.173 2.196.248 5.137.91 7.256 2.366V5.51Zm1.5 15.361c.69-.474 1.47-.864 2.28-1.184A5 5 0 0 1 22 14.546v-9.48c0-1.132-.896-2.048-1.994-1.924-2.195.248-5.137.91-7.256 2.366V20.87ZM4.259 8.27a.75.75 0 0 1 .856-.626c1.303.202 2.77.539 4.156 1.075a.75.75 0 0 1-.542 1.399c-1.258-.487-2.615-.802-3.844-.992a.75.75 0 0 1-.626-.856Zm.856 3.374a.75.75 0 0 0-.23 1.482c.62.096 1.273.224 1.932.39a.75.75 0 1 0 .366-1.454 22.69 22.69 0 0 0-2.068-.418Zm11.953 7.522a1.612 1.612 0 0 1 2.28-2.28l.145.145.145-.145a1.612 1.612 0 0 1 2.28 2.28l-1.675 1.675a.997.997 0 0 1-.75.292.997.997 0 0 1-.75-.292l-1.675-1.675Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookOpenFavourite);
export default ForwardRef;
