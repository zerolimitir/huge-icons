import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpeedTest = (
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
            d='M16.803 10.408a.75.75 0 0 0 1.26-.815l-1.26.815ZM5.938 9.593a.75.75 0 0 0 1.26.815l-1.26-.815Zm9.705 2.793a.75.75 0 1 0-1.286-.772l1.286.772ZM6 20.75h12v-1.5H6v1.5ZM22.75 16v-2h-1.5v2h1.5Zm-21.5-2v2h1.5v-2h-1.5ZM12 3.25C6.063 3.25 1.25 8.063 1.25 14h1.5A9.25 9.25 0 0 1 12 4.75v-1.5ZM22.75 14c0-5.937-4.813-10.75-10.75-10.75v1.5A9.25 9.25 0 0 1 21.25 14h1.5ZM18 20.75A4.75 4.75 0 0 0 22.75 16h-1.5A3.25 3.25 0 0 1 18 19.25v1.5Zm-12-1.5A3.25 3.25 0 0 1 2.75 16h-1.5A4.75 4.75 0 0 0 6 20.75v-1.5Zm3.75.75A2.25 2.25 0 0 1 12 17.75v-1.5A3.75 3.75 0 0 0 8.25 20h1.5ZM12 17.75A2.25 2.25 0 0 1 14.25 20h1.5A3.75 3.75 0 0 0 12 16.25v1.5Zm0-10c2.44 0 3.858 1.197 4.803 2.658l1.26-.815C16.914 7.82 15.072 6.25 12 6.25v1.5Zm-4.803 2.658C8.142 8.948 9.56 7.75 12 7.75v-1.5c-3.072 0-4.915 1.57-6.062 3.343l1.26.815Zm5.446 6.978 3-5-1.286-.772-3 5 1.286.772Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpeedTest);
export default ForwardRef;
