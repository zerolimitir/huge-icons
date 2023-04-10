import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileVideo = (
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
            d='M3 6h-.75H3Zm0 12h.75H3Zm4 4v-.75.75Zm10 0v.75V22Zm4-4h-.75.75Zm0-6.343h.75H21ZM11.343 2v-.75V2ZM7 2v.75V2Zm12.828 6.828-.53.53.53-.53Zm-5.656-5.656.53-.53-.53.53ZM13 6h-.75.75Zm4 4v.75V10Zm-4.668 7.445.416.624-.416-.624Zm1.796-3.693-.416.624.416-.624Zm-1.796-1.197.416-.624-.416.624ZM2.25 6v12h1.5V6h-1.5ZM7 22.75h10v-1.5H7v1.5ZM21.75 18v-6.343h-1.5V18h1.5ZM11.343 1.25H7v1.5h4.343v-1.5Zm9.016 7.048-5.657-5.657-1.06 1.06 5.656 5.658 1.06-1.06ZM11.343 2.75a3.25 3.25 0 0 1 2.298.952l1.06-1.06a4.75 4.75 0 0 0-3.358-1.392v1.5Zm10.407 8.907c0-1.26-.5-2.468-1.391-3.359l-1.06 1.06c.609.61.951 1.437.951 2.299h1.5ZM2.25 18A4.75 4.75 0 0 0 7 22.75v-1.5A3.25 3.25 0 0 1 3.75 18h-1.5Zm1.5-12A3.25 3.25 0 0 1 7 2.75v-1.5A4.75 4.75 0 0 0 2.25 6h1.5ZM17 22.75A4.75 4.75 0 0 0 21.75 18h-1.5A3.25 3.25 0 0 1 17 21.25v1.5ZM12.25 2v4h1.5V2h-1.5ZM17 10.75h4v-1.5h-4v1.5ZM12.25 6A4.75 4.75 0 0 0 17 10.75v-1.5A3.25 3.25 0 0 1 13.75 6h-1.5Zm-3 7.803v2.394h1.5v-2.394h-1.5Zm3.498 4.266 1.796-1.197-.832-1.248-1.796 1.197.832 1.248Zm1.796-4.941-1.796-1.197-.832 1.248 1.796 1.197.832-1.248Zm0 3.744a2.25 2.25 0 0 0 0-3.744l-.832 1.248a.75.75 0 0 1 0 1.248l.832 1.248Zm-5.294-.675c0 1.797 2.003 2.87 3.498 1.872l-.832-1.248a.75.75 0 0 1-1.166-.624h-1.5Zm1.5-2.394a.75.75 0 0 1 1.166-.624l.832-1.248c-1.495-.997-3.498.075-3.498 1.872h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileVideo);
export default ForwardRef;
