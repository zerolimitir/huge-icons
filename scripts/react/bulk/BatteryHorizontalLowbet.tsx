import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBatteryHorizontalLowbet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.811 2.278c-.396.097-.638.519-.531.926.041.156.194.324 1.348 1.481l1.301 1.306-.675.019c-.543.015-.717.035-.898.1a2.093 2.093 0 0 0-1.248 1.24l-.088.23v8.84l.088.23a2.112 2.112 0 0 0 1.248 1.244l.224.086 6.68.011 6.68.01 1.82 1.818c1.249 1.248 1.867 1.837 1.969 1.88a.735.735 0 0 0 1.031-.679.847.847 0 0 0-.077-.332C21.603 20.535 3.485 2.401 3.34 2.329a.984.984 0 0 0-.529-.051m19 7a.883.883 0 0 0-.481.374c-.064.117-.071.318-.081 2.259-.008 1.491.002 2.181.034 2.298a.809.809 0 0 0 .192.316.742.742 0 0 0 1.245-.326c.028-.104.039-.878.031-2.288-.011-2.065-.014-2.135-.093-2.27a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBatteryHorizontalLowbet);
export default ForwardRef;
