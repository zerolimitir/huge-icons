import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLineChartDescending = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.551 4.062c-.76.184-1.358.8-1.512 1.558-.03.146-.04.373-.025.58l.023.34-2.496 1.869-2.497 1.868-.224-.099a1.985 1.985 0 0 0-2.224.418c-.796.797-.796 2.013 0 2.807.797.794 2.013.794 2.807 0 .421-.421.626-.954.586-1.523a3.628 3.628 0 0 0-.035-.346c-.008-.026 1.115-.894 2.494-1.929l2.508-1.882.216.095c.299.132.662.197.972.172l.262-.021 2.957 4.435a564.461 564.461 0 0 1 2.957 4.46c0 .014-.052.135-.116.27-.372.791-.223 1.653.393 2.269.282.282.552.436.941.536C20.757 20.252 22 19.273 22 18c0-.951-.716-1.799-1.656-1.962a2.237 2.237 0 0 0-.51-.024l-.235.025L16.64 11.6a549.755 549.755 0 0 1-2.96-4.464c0-.014.052-.135.116-.27.47-.998.079-2.15-.891-2.627-.488-.239-.883-.291-1.354-.177'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLineChartDescending);
export default ForwardRef;
