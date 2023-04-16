import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHourglassEnd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M7.525 1.286c-1.179.123-2.298.915-2.846 2.014-.553 1.109-.571 2.245-.053 3.332.094.197.609.919 1.577 2.212.79 1.055 1.491 2.026 1.557 2.157a2.23 2.23 0 0 1 0 1.998c-.066.131-.767 1.102-1.557 2.157-1.715 2.289-1.807 2.454-1.927 3.442-.085.705.045 1.383.403 2.102a3.67 3.67 0 0 0 2.915 2.018c.563.057 8.249.057 8.812 0a3.67 3.67 0 0 0 2.915-2.018c.553-1.109.571-2.245.053-3.332-.094-.197-.609-.919-1.577-2.212-.79-1.055-1.491-2.026-1.557-2.157a2.231 2.231 0 0 1 0-2c.067-.131.718-1.035 1.447-2.008.73-.973 1.412-1.9 1.515-2.059.405-.619.617-1.547.524-2.291a3.7 3.7 0 0 0-.405-1.341 3.67 3.67 0 0 0-2.915-2.018c-.506-.051-8.384-.048-8.881.004m9.026 1.531a2.31 2.31 0 0 1 1.633 1.638c.121.451.048 1.128-.167 1.551-.054.106-.741 1.052-1.528 2.103-.787 1.051-1.495 2.037-1.575 2.191-.28.543-.394 1.035-.394 1.7s.114 1.157.394 1.7c.08.154.788 1.14 1.575 2.191.787 1.051 1.474 1.997 1.528 2.103.215.423.288 1.1.167 1.551a2.31 2.31 0 0 1-1.633 1.638c-.313.083-8.789.083-9.102 0a2.31 2.31 0 0 1-1.63-1.623c-.123-.466-.053-1.137.164-1.566.054-.106.741-1.052 1.528-2.103.787-1.051 1.495-2.037 1.575-2.191.28-.543.394-1.035.394-1.7s-.114-1.157-.394-1.7c-.08-.154-.788-1.14-1.575-2.191-.787-1.051-1.474-1.997-1.528-2.103-.217-.429-.287-1.1-.164-1.566.159-.596.647-1.205 1.156-1.444.513-.24.274-.229 5.005-.232 3.621-.003 4.396.006 4.571.053m-4.845 11.067a1.64 1.64 0 0 0-.828.381c-.185.167-2.166 2.623-2.301 2.855a1.754 1.754 0 0 0 .562 2.34c.449.286.391.28 2.861.28 2.076 0 2.234-.005 2.44-.076 1.013-.349 1.491-1.451 1.045-2.406-.124-.264-2.066-2.726-2.356-2.986-.366-.329-.877-.468-1.423-.388m1.444 2.755c1.04 1.297 1.086 1.371.944 1.528-.063.069-.18.073-2.087.073-1.824 0-2.028-.006-2.094-.066-.157-.142-.104-.235.71-1.254.431-.539.891-1.112 1.023-1.272.376-.461.298-.512 1.504.991'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHourglassEnd);
export default ForwardRef;