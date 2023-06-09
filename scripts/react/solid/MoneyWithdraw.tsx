import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyWithdraw = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.503 2.042c-1.016.172-1.947.934-2.301 1.883-.203.545-.201.472-.201 5.067-.001 4.69-.006 4.572.233 5.159a3.046 3.046 0 0 0 1.615 1.615c.6.245.274.234 7.151.234 6.876 0 6.551.011 7.15-.233.902-.367 1.585-1.203 1.788-2.186.093-.448.093-8.714 0-9.162a2.96 2.96 0 0 0-1.642-2.107c-.657-.316-.005-.289-7.176-.297-3.531-.003-6.509.009-6.617.027m.837 2.024c.369.126.66.538.66.934 0 .527-.473 1-1 1-.242 0-.521-.119-.701-.299A.984.984 0 0 1 5.3 4.298a.977.977 0 0 1 1.04-.232m6.043 2.977c.802.147 1.456.829 1.584 1.652C14.153 9.894 13.209 11 12 11a2.016 2.016 0 0 1-1.967-1.695c-.1-.642.099-1.244.563-1.709.489-.488 1.102-.678 1.787-.553m5.957 5.023c.369.126.66.538.66.934 0 .527-.473 1-1 1-.242 0-.521-.119-.701-.299a.984.984 0 0 1 .001-1.403.977.977 0 0 1 1.04-.232m-6.64 5.751a.861.861 0 0 0-.398.432c-.051.122-.062.343-.062 1.237v1.089l-.39-.382c-.462-.452-.566-.513-.882-.513-.2 0-.262.019-.405.122a.731.731 0 0 0-.278.839c.065.216 1.601 1.746 1.921 1.913.323.168.724.232 1.065.171.5-.09.633-.183 1.544-1.081.459-.453.859-.882.89-.953a.795.795 0 0 0-.038-.654c-.126-.239-.447-.415-.698-.381-.262.035-.397.123-.819.537l-.39.382-.001-1.098c-.001-1.209-.015-1.292-.264-1.524a.752.752 0 0 0-.795-.136'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyWithdraw);
export default ForwardRef;
