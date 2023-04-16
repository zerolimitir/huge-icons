import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAddTo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 1.278a.883.883 0 0 0-.481.374c-.061.112-.072.276-.082 1.325l-.012 1.197-.408-.405c-.228-.226-.474-.433-.557-.467a.734.734 0 0 0-1.031.678c0 .102.034.249.077.332.042.081.434.503.872.937.691.684.834.806 1.074.92.263.124.3.131.737.131s.474-.007.737-.131c.239-.113.382-.236 1.053-.9.428-.423.811-.836.854-.917.139-.271.068-.686-.15-.877a.78.78 0 0 0-.846-.118c-.081.042-.31.241-.508.441l-.36.364-.02-1.191c-.019-1.108-.026-1.201-.102-1.33a.807.807 0 0 0-.847-.363M4.235 8.095c-.266.095-.39.225-1.182 1.237-.958 1.223-.993 1.281-.992 1.628a.927.927 0 0 0 .303.724c.287.287.192.279 3.483.267l2.939-.011.195-.12c.191-.119.43-.416 2.72-3.39l.3-.39-3.81.002c-3.01.001-3.841.012-3.956.053m7.805-.035c0 .069 2.789 3.618 2.912 3.705.082.058.22.126.308.15.11.031 1.04.045 2.983.045 3.153 0 3.07.007 3.354-.277a.926.926 0 0 0 .302-.723c.001-.339-.038-.406-.9-1.547-.79-1.045-.88-1.148-1.099-1.267l-.16-.086-3.85-.011c-2.117-.006-3.85-.001-3.85.011m-.855 3.519c-.436.583-.896 1.155-1.022 1.272a2.811 2.811 0 0 1-1.023.573c-.215.063-.491.072-2.69.086L4 13.524v2.88c0 3.142.002 3.178.234 3.747a3.046 3.046 0 0 0 1.615 1.615c.595.242.372.234 6.151.234 5.777 0 5.556.008 6.15-.233a3.08 3.08 0 0 0 1.617-1.617c.231-.567.233-.605.233-3.746v-2.88l-2.45-.014c-2.199-.014-2.475-.023-2.69-.086a2.84 2.84 0 0 1-1.012-.562c-.122-.111-.58-.679-1.017-1.262-.438-.583-.808-1.065-.824-1.07-.015-.006-.385.467-.822 1.049'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAddTo);
export default ForwardRef;