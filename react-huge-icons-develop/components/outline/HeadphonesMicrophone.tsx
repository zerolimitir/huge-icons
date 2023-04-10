import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHeadphonesMicrophone = (
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
            d='M21.75 14a.75.75 0 0 0-1.5 0h1.5ZM12 21.25a.75.75 0 0 0 0 1.5v-1.5ZM20.25 13v2h1.5v-2h-1.5Zm-4.5 2v-2h-1.5v2h1.5ZM18 17.25A2.25 2.25 0 0 1 15.75 15h-1.5A3.75 3.75 0 0 0 18 18.75v-1.5ZM20.25 15A2.25 2.25 0 0 1 18 17.25v1.5A3.75 3.75 0 0 0 21.75 15h-1.5ZM18 10.75A2.25 2.25 0 0 1 20.25 13h1.5A3.75 3.75 0 0 0 18 9.25v1.5Zm0-1.5A3.75 3.75 0 0 0 14.25 13h1.5A2.25 2.25 0 0 1 18 10.75v-1.5ZM8.25 13v2h1.5v-2h-1.5Zm-4.5 2v-2h-1.5v2h1.5ZM6 17.25A2.25 2.25 0 0 1 3.75 15h-1.5A3.75 3.75 0 0 0 6 18.75v-1.5ZM8.25 15A2.25 2.25 0 0 1 6 17.25v1.5A3.75 3.75 0 0 0 9.75 15h-1.5ZM6 10.75A2.25 2.25 0 0 1 8.25 13h1.5A3.75 3.75 0 0 0 6 9.25v1.5Zm0-1.5A3.75 3.75 0 0 0 2.25 13h1.5A2.25 2.25 0 0 1 6 10.75v-1.5ZM3.75 13v-2h-1.5v2h1.5Zm16.5-2v2h1.5v-2h-1.5ZM12 2.75A8.25 8.25 0 0 1 20.25 11h1.5A9.75 9.75 0 0 0 12 1.25v1.5ZM3.75 11A8.25 8.25 0 0 1 12 2.75v-1.5A9.75 9.75 0 0 0 2.25 11h1.5Zm16.5 3v2h1.5v-2h-1.5ZM15 21.25h-3v1.5h3v-1.5ZM20.25 16c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 21.75 16h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHeadphonesMicrophone);
export default ForwardRef;
