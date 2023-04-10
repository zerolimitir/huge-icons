import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgImage = (
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
            d='m21.11 11.406-.417.624.416-.624ZM18.728 9.82l.416-.624-.416.624Zm-5.048.5-.53-.53.53.53Zm-8.41 3.862.417-.624-.416.624Zm-1.716-1.144-.416.623.416-.623Zm17.97-2.255-2.38-1.587-.833 1.248 2.381 1.587.832-1.248Zm-8.374-.994-3.363 3.363 1.061 1.06 3.363-3.362-1.061-1.06Zm-7.463 3.769L3.97 12.412l-.832 1.248 1.717 1.145.832-1.248Zm15.562-.487V16h1.5v-2.93h-1.5ZM18 19.25H6v1.5h12v-1.5ZM2.75 16v-2.132h-1.5V16h1.5ZM6 19.25A3.25 3.25 0 0 1 2.75 16h-1.5A4.75 4.75 0 0 0 6 20.75v-1.5ZM21.25 16A3.25 3.25 0 0 1 18 19.25v1.5A4.75 4.75 0 0 0 22.75 16h-1.5ZM3.97 12.412c-1.162-.775-2.72.059-2.72 1.456h1.5c0-.2.223-.318.389-.207l.832-1.249Zm5.818.739a3.25 3.25 0 0 1-4.1.406l-.832 1.248a4.75 4.75 0 0 0 5.993-.593L9.79 13.15Zm9.357-3.956a4.75 4.75 0 0 0-5.994.593l1.06 1.061a3.25 3.25 0 0 1 4.101-.406l.832-1.248Zm1.548 2.835c.348.232.557.622.557 1.04h1.5c0-.92-.46-1.778-1.225-2.288l-.832 1.248ZM9.25 6.5A1.75 1.75 0 0 1 7.5 8.25v1.5a3.25 3.25 0 0 0 3.25-3.25h-1.5ZM7.5 8.25A1.75 1.75 0 0 1 5.75 6.5h-1.5A3.25 3.25 0 0 0 7.5 9.75v-1.5ZM5.75 6.5c0-.966.784-1.75 1.75-1.75v-1.5A3.25 3.25 0 0 0 4.25 6.5h1.5ZM7.5 4.75c.966 0 1.75.784 1.75 1.75h1.5A3.25 3.25 0 0 0 7.5 3.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgImage);
export default ForwardRef;
