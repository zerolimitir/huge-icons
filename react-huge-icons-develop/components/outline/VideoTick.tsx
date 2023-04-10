import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVideoTick = (
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
            d='M13.376 7.584a.75.75 0 1 0 1.248.832l-1.248-.832Zm-2.752-5.168a.75.75 0 1 0-1.248-.832l1.248.832ZM5.376 7.584a.75.75 0 0 0 1.248.832l-1.248-.832Zm4.093 5.83a.75.75 0 0 0-.938 1.172l.938-1.172Zm1.284 1.988.468-.585-.468.585Zm1.377-.122-.564-.494.564.494Zm3.434-2.786a.75.75 0 1 0-1.128-.988l1.128.988ZM6 2.75h12v-1.5H6v1.5ZM2.75 18V6h-1.5v12h1.5Zm18.5-12v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5Zm-20 0A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Zm-4 7.5h20v-1.5H2v1.5Zm15.376-7.166-4 6 1.248.832 4-6-1.248-.832Zm-8 0-4 6 1.248.832 4-6-1.248-.832Zm-.845 13.002 1.753 1.402.937-1.171-1.752-1.403-.938 1.172Zm4.163 1.188 2.87-3.28-1.128-.988-2.87 3.28 1.128.988Zm-2.41.214a1.75 1.75 0 0 0 2.41-.214l-1.128-.988a.25.25 0 0 1-.345.03l-.937 1.172Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVideoTick);
export default ForwardRef;
