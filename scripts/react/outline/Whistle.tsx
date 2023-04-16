import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWhistle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.811 2.278a.883.883 0 0 0-.481.374c-.059.108-.072.262-.083 1.008-.015.975.005 1.099.204 1.327a.714.714 0 0 0 1.098 0c.199-.228.219-.352.204-1.327-.012-.801-.02-.893-.095-1.019a.807.807 0 0 0-.847-.363M8.672 4.362c-.349.184-.497.639-.319.981.113.218 1.189 1.278 1.376 1.355a.734.734 0 0 0 1.031-.678.847.847 0 0 0-.077-.332c-.11-.211-1.189-1.271-1.372-1.346a.796.796 0 0 0-.639.02m9.988-.016c-.18.093-1.213 1.13-1.307 1.311a.768.768 0 0 0 .062.759c.219.288.628.387.937.227.181-.095 1.215-1.134 1.304-1.311.127-.254.048-.673-.162-.857-.222-.195-.597-.253-.834-.129M7.42 8.282c-2.307.183-4.401 1.604-5.45 3.698a6.742 6.742 0 0 0 3.01 9.05 6.746 6.746 0 0 0 8.65-2.31c.45-.675.85-1.654.99-2.42.036-.198.073-.399.083-.447l.017-.087 1.85-.017c2.009-.018 2.066-.023 2.77-.267.48-.166.814-.348 1.603-.873.846-.562 1.067-.753 1.332-1.15.401-.598.502-1.059.474-2.157-.014-.548-.039-.83-.088-1.002a2.798 2.798 0 0 0-1.459-1.762c-.599-.296-.066-.274-7.082-.281-3.465-.004-6.48.008-6.7.025m5.82 2.128c0 .358.019.717.042.799.108.39.52.618.92.51.22-.059.454-.287.513-.5.025-.087.045-.452.045-.81v-.651l2.79.011 2.79.011.197.097c.251.123.463.335.586.586.09.183.098.248.109.939.019 1.14-.033 1.235-1.057 1.919-.724.484-1.052.662-1.475.803-.277.092-.305.093-2.607.115l-2.326.021-.172.121c-.271.19-.32.311-.36.882-.058.835-.21 1.408-.556 2.097-.7 1.392-1.92 2.357-3.479 2.752-.384.098-.487.107-1.2.107-.717 0-.815-.009-1.211-.109-1.266-.32-2.337-1.044-3.07-2.076-.287-.404-.654-1.177-.774-1.634-.335-1.267-.222-2.515.332-3.66.388-.8.885-1.413 1.562-1.927.405-.307 1.251-.732 1.701-.856.658-.181.811-.189 3.83-.193l2.87-.004v.65m-5.584 1.871a2.752 2.752 0 0 0-2.112 1.496c-.209.426-.28.737-.28 1.223 0 .485.071.797.279 1.221a2.804 2.804 0 0 0 1.777 1.444c.351.096 1.01.095 1.36 0 .784-.215 1.461-.773 1.798-1.482.188-.396.258-.716.258-1.183 0-.657-.175-1.169-.575-1.688a2.78 2.78 0 0 0-2.505-1.031m.881 1.597c.25.122.463.334.586.585.14.284.139.791-.001 1.076-.564 1.146-2.282.806-2.355-.465a1.44 1.44 0 0 1 .033-.42c.12-.378.42-.694.791-.835.232-.089.705-.059.946.059'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWhistle);
export default ForwardRef;