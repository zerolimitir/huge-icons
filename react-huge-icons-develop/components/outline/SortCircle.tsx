import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSortCircle = (
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
            d='M3.44 5.877a.75.75 0 1 0 1.12.996l-1.12-.996Zm2.065-1.195-.56-.499.56.499Zm2.99 0 .56-.499-.56.499Zm0 14.636.56.499-.56-.499Zm2.066-1.195a.75.75 0 0 0-1.122-.996l1.122.996Zm-5.056 1.195-.56.499.56-.499Zm-.944-2.191a.75.75 0 0 0-1.122.996l1.122-.996Zm0-10.254L6.066 5.18l-1.121-.997-1.506 1.694 1.122.996ZM7.934 5.18 9.44 6.873l1.122-.996-1.506-1.694-1.12.997Zm1.121 14.637 1.506-1.694-1.122-.996-1.505 1.693 1.121.997Zm-2.99-.997-1.504-1.693-1.122.996 1.506 1.694 1.12-.997Zm1.87 0a1.25 1.25 0 0 1-1.87 0l-1.12.997a2.75 2.75 0 0 0 4.11 0l-1.12-.997ZM6.064 5.18a1.25 1.25 0 0 1 1.87 0l1.12-.997a2.75 2.75 0 0 0-4.11 0l1.12.997ZM17 9.25A2.25 2.25 0 0 1 14.75 7h-1.5A3.75 3.75 0 0 0 17 10.75v-1.5ZM19.25 7A2.25 2.25 0 0 1 17 9.25v1.5A3.75 3.75 0 0 0 20.75 7h-1.5ZM17 4.75A2.25 2.25 0 0 1 19.25 7h1.5A3.75 3.75 0 0 0 17 3.25v1.5Zm0-1.5A3.75 3.75 0 0 0 13.25 7h1.5A2.25 2.25 0 0 1 17 4.75v-1.5Zm0 16A2.25 2.25 0 0 1 14.75 17h-1.5A3.75 3.75 0 0 0 17 20.75v-1.5ZM19.25 17A2.25 2.25 0 0 1 17 19.25v1.5A3.75 3.75 0 0 0 20.75 17h-1.5ZM17 14.75A2.25 2.25 0 0 1 19.25 17h1.5A3.75 3.75 0 0 0 17 13.25v1.5Zm0-1.5A3.75 3.75 0 0 0 13.25 17h1.5A2.25 2.25 0 0 1 17 14.75v-1.5ZM6.25 4v16h1.5V4h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSortCircle);
export default ForwardRef;
