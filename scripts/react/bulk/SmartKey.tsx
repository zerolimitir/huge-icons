import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSmartKey = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.237 5.302a4.8 4.8 0 0 0-2.503 1.267c-.474.454-.579.711-.432 1.062a.734.734 0 0 0 .398.413c.338.157.575.081 1.007-.323.775-.723 1.714-1.05 2.671-.929.721.091 1.352.4 1.935.949.343.323.447.379.697.379.476 0 .825-.448.732-.941-.035-.187-.528-.71-.971-1.028-1.023-.737-2.368-1.06-3.534-.849m.286 2.979a2.952 2.952 0 0 0-1.349.663c-.264.225-.359.357-.418.58-.149.568.469 1.091 1.018.861.073-.03.229-.141.347-.246.255-.227.489-.338.775-.367.274-.028.61.069.82.238l.293.238a.728.728 0 0 0 .978-.019.728.728 0 0 0 .14-.952c-.222-.35-.777-.733-1.307-.902-.356-.114-.986-.16-1.297-.094m.177 2.775a.978.978 0 0 0-.25.186c-.391.401-.191 1.092.358 1.24.708.191 1.247-.67.759-1.211a1.001 1.001 0 0 0-.276-.217.875.875 0 0 0-.591.002m1.339 5.005c-.432.134-.857.572-.985 1.015-.095.326-.059.771.087 1.069.146.3.416.568.72.717l.239.118h7.76l.229-.107a1.67 1.67 0 0 0 .761-.748c.118-.238.13-.298.13-.625s-.012-.387-.13-.625a1.67 1.67 0 0 0-.761-.748l-.229-.107-3.82-.008c-3.19-.006-3.85.002-4.001.049'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartKey);
export default ForwardRef;
