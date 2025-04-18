// Original file: deps/envoy-api/envoy/config/endpoint/v3/endpoint.proto

import type { LocalityLbEndpoints as _envoy_config_endpoint_v3_LocalityLbEndpoints, LocalityLbEndpoints__Output as _envoy_config_endpoint_v3_LocalityLbEndpoints__Output } from '../../../../envoy/config/endpoint/v3/LocalityLbEndpoints';
import type { Endpoint as _envoy_config_endpoint_v3_Endpoint, Endpoint__Output as _envoy_config_endpoint_v3_Endpoint__Output } from '../../../../envoy/config/endpoint/v3/Endpoint';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import type { FractionalPercent as _envoy_type_v3_FractionalPercent, FractionalPercent__Output as _envoy_type_v3_FractionalPercent__Output } from '../../../../envoy/type/v3/FractionalPercent';

export interface _envoy_config_endpoint_v3_ClusterLoadAssignment_Policy_DropOverload {
  /**
   * Identifier for the policy specifying the drop.
   */
  'category'?: (string);
  /**
   * Percentage of traffic that should be dropped for the category.
   */
  'drop_percentage'?: (_envoy_type_v3_FractionalPercent | null);
}

export interface _envoy_config_endpoint_v3_ClusterLoadAssignment_Policy_DropOverload__Output {
  /**
   * Identifier for the policy specifying the drop.
   */
  'category': (string);
  /**
   * Percentage of traffic that should be dropped for the category.
   */
  'drop_percentage': (_envoy_type_v3_FractionalPercent__Output | null);
}

/**
 * Load balancing policy settings.
 * [#next-free-field: 7]
 */
export interface _envoy_config_endpoint_v3_ClusterLoadAssignment_Policy {
  /**
   * Action to trim the overall incoming traffic to protect the upstream
   * hosts. This action allows protection in case the hosts are unable to
   * recover from an outage, or unable to autoscale or unable to handle
   * incoming traffic volume for any reason.
   * 
   * At the client each category is applied one after the other to generate
   * the 'actual' drop percentage on all outgoing traffic. For example:
   * 
   * .. code-block:: json
   * 
   * { "drop_overloads": [
   * { "category": "throttle", "drop_percentage": 60 }
   * { "category": "lb", "drop_percentage": 50 }
   * ]}
   * 
   * The actual drop percentages applied to the traffic at the clients will be
   * "throttle"_drop = 60%
   * "lb"_drop = 20%  // 50% of the remaining 'actual' load, which is 40%.
   * actual_outgoing_load = 20% // remaining after applying all categories.
   * 
   * Envoy supports only one element and will NACK if more than one element is present.
   * Other xDS-capable data planes will not necessarily have this limitation.
   * 
   * In Envoy, this ``drop_overloads`` config can be overridden by a runtime key
   * "load_balancing_policy.drop_overload_limit" setting. This runtime key can be set to
   * any integer number between 0 and 100. 0 means drop 0%. 100 means drop 100%.
   * When both ``drop_overloads`` config and "load_balancing_policy.drop_overload_limit"
   * setting are in place, the min of these two wins.
   */
  'drop_overloads'?: (_envoy_config_endpoint_v3_ClusterLoadAssignment_Policy_DropOverload)[];
  /**
   * Priority levels and localities are considered overprovisioned with this
   * factor (in percentage). This means that we don't consider a priority
   * level or locality unhealthy until the fraction of healthy hosts
   * multiplied by the overprovisioning factor drops below 100.
   * With the default value 140(1.4), Envoy doesn't consider a priority level
   * or a locality unhealthy until their percentage of healthy hosts drops
   * below 72%. For example:
   * 
   * .. code-block:: json
   * 
   * { "overprovisioning_factor": 100 }
   * 
   * Read more at :ref:`priority levels <arch_overview_load_balancing_priority_levels>` and
   * :ref:`localities <arch_overview_load_balancing_locality_weighted_lb>`.
   */
  'overprovisioning_factor'?: (_google_protobuf_UInt32Value | null);
  /**
   * The max time until which the endpoints from this assignment can be used.
   * If no new assignments are received before this time expires the endpoints
   * are considered stale and should be marked unhealthy.
   * Defaults to 0 which means endpoints never go stale.
   */
  'endpoint_stale_after'?: (_google_protobuf_Duration | null);
  /**
   * If true, use the :ref:`load balancing weight
   * <envoy_v3_api_field_config.endpoint.v3.LbEndpoint.load_balancing_weight>` of healthy and unhealthy
   * hosts to determine the health of the priority level. If false, use the number of healthy and unhealthy hosts
   * to determine the health of the priority level, or in other words assume each host has a weight of 1 for
   * this calculation.
   * 
   * Note: this is not currently implemented for
   * :ref:`locality weighted load balancing <arch_overview_load_balancing_locality_weighted_lb>`.
   */
  'weighted_priority_health'?: (boolean);
}

/**
 * Load balancing policy settings.
 * [#next-free-field: 7]
 */
export interface _envoy_config_endpoint_v3_ClusterLoadAssignment_Policy__Output {
  /**
   * Action to trim the overall incoming traffic to protect the upstream
   * hosts. This action allows protection in case the hosts are unable to
   * recover from an outage, or unable to autoscale or unable to handle
   * incoming traffic volume for any reason.
   * 
   * At the client each category is applied one after the other to generate
   * the 'actual' drop percentage on all outgoing traffic. For example:
   * 
   * .. code-block:: json
   * 
   * { "drop_overloads": [
   * { "category": "throttle", "drop_percentage": 60 }
   * { "category": "lb", "drop_percentage": 50 }
   * ]}
   * 
   * The actual drop percentages applied to the traffic at the clients will be
   * "throttle"_drop = 60%
   * "lb"_drop = 20%  // 50% of the remaining 'actual' load, which is 40%.
   * actual_outgoing_load = 20% // remaining after applying all categories.
   * 
   * Envoy supports only one element and will NACK if more than one element is present.
   * Other xDS-capable data planes will not necessarily have this limitation.
   * 
   * In Envoy, this ``drop_overloads`` config can be overridden by a runtime key
   * "load_balancing_policy.drop_overload_limit" setting. This runtime key can be set to
   * any integer number between 0 and 100. 0 means drop 0%. 100 means drop 100%.
   * When both ``drop_overloads`` config and "load_balancing_policy.drop_overload_limit"
   * setting are in place, the min of these two wins.
   */
  'drop_overloads': (_envoy_config_endpoint_v3_ClusterLoadAssignment_Policy_DropOverload__Output)[];
  /**
   * Priority levels and localities are considered overprovisioned with this
   * factor (in percentage). This means that we don't consider a priority
   * level or locality unhealthy until the fraction of healthy hosts
   * multiplied by the overprovisioning factor drops below 100.
   * With the default value 140(1.4), Envoy doesn't consider a priority level
   * or a locality unhealthy until their percentage of healthy hosts drops
   * below 72%. For example:
   * 
   * .. code-block:: json
   * 
   * { "overprovisioning_factor": 100 }
   * 
   * Read more at :ref:`priority levels <arch_overview_load_balancing_priority_levels>` and
   * :ref:`localities <arch_overview_load_balancing_locality_weighted_lb>`.
   */
  'overprovisioning_factor': (_google_protobuf_UInt32Value__Output | null);
  /**
   * The max time until which the endpoints from this assignment can be used.
   * If no new assignments are received before this time expires the endpoints
   * are considered stale and should be marked unhealthy.
   * Defaults to 0 which means endpoints never go stale.
   */
  'endpoint_stale_after': (_google_protobuf_Duration__Output | null);
  /**
   * If true, use the :ref:`load balancing weight
   * <envoy_v3_api_field_config.endpoint.v3.LbEndpoint.load_balancing_weight>` of healthy and unhealthy
   * hosts to determine the health of the priority level. If false, use the number of healthy and unhealthy hosts
   * to determine the health of the priority level, or in other words assume each host has a weight of 1 for
   * this calculation.
   * 
   * Note: this is not currently implemented for
   * :ref:`locality weighted load balancing <arch_overview_load_balancing_locality_weighted_lb>`.
   */
  'weighted_priority_health': (boolean);
}

/**
 * Each route from RDS will map to a single cluster or traffic split across
 * clusters using weights expressed in the RDS WeightedCluster.
 * 
 * With EDS, each cluster is treated independently from a LB perspective, with
 * LB taking place between the Localities within a cluster and at a finer
 * granularity between the hosts within a locality. The percentage of traffic
 * for each endpoint is determined by both its load_balancing_weight, and the
 * load_balancing_weight of its locality. First, a locality will be selected,
 * then an endpoint within that locality will be chose based on its weight.
 * [#next-free-field: 6]
 */
export interface ClusterLoadAssignment {
  /**
   * Name of the cluster. This will be the :ref:`service_name
   * <envoy_v3_api_field_config.cluster.v3.Cluster.EdsClusterConfig.service_name>` value if specified
   * in the cluster :ref:`EdsClusterConfig
   * <envoy_v3_api_msg_config.cluster.v3.Cluster.EdsClusterConfig>`.
   */
  'cluster_name'?: (string);
  /**
   * List of endpoints to load balance to.
   */
  'endpoints'?: (_envoy_config_endpoint_v3_LocalityLbEndpoints)[];
  /**
   * Load balancing policy settings.
   */
  'policy'?: (_envoy_config_endpoint_v3_ClusterLoadAssignment_Policy | null);
  /**
   * Map of named endpoints that can be referenced in LocalityLbEndpoints.
   * [#not-implemented-hide:]
   */
  'named_endpoints'?: ({[key: string]: _envoy_config_endpoint_v3_Endpoint});
}

/**
 * Each route from RDS will map to a single cluster or traffic split across
 * clusters using weights expressed in the RDS WeightedCluster.
 * 
 * With EDS, each cluster is treated independently from a LB perspective, with
 * LB taking place between the Localities within a cluster and at a finer
 * granularity between the hosts within a locality. The percentage of traffic
 * for each endpoint is determined by both its load_balancing_weight, and the
 * load_balancing_weight of its locality. First, a locality will be selected,
 * then an endpoint within that locality will be chose based on its weight.
 * [#next-free-field: 6]
 */
export interface ClusterLoadAssignment__Output {
  /**
   * Name of the cluster. This will be the :ref:`service_name
   * <envoy_v3_api_field_config.cluster.v3.Cluster.EdsClusterConfig.service_name>` value if specified
   * in the cluster :ref:`EdsClusterConfig
   * <envoy_v3_api_msg_config.cluster.v3.Cluster.EdsClusterConfig>`.
   */
  'cluster_name': (string);
  /**
   * List of endpoints to load balance to.
   */
  'endpoints': (_envoy_config_endpoint_v3_LocalityLbEndpoints__Output)[];
  /**
   * Load balancing policy settings.
   */
  'policy': (_envoy_config_endpoint_v3_ClusterLoadAssignment_Policy__Output | null);
  /**
   * Map of named endpoints that can be referenced in LocalityLbEndpoints.
   * [#not-implemented-hide:]
   */
  'named_endpoints': ({[key: string]: _envoy_config_endpoint_v3_Endpoint__Output});
}
