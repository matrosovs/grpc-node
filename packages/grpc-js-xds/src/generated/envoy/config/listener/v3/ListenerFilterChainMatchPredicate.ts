// Original file: deps/envoy-api/envoy/config/listener/v3/listener_components.proto

import type { ListenerFilterChainMatchPredicate as _envoy_config_listener_v3_ListenerFilterChainMatchPredicate, ListenerFilterChainMatchPredicate__Output as _envoy_config_listener_v3_ListenerFilterChainMatchPredicate__Output } from '../../../../envoy/config/listener/v3/ListenerFilterChainMatchPredicate';
import type { Int32Range as _envoy_type_v3_Int32Range, Int32Range__Output as _envoy_type_v3_Int32Range__Output } from '../../../../envoy/type/v3/Int32Range';

/**
 * A set of match configurations used for logical operations.
 */
export interface _envoy_config_listener_v3_ListenerFilterChainMatchPredicate_MatchSet {
  /**
   * The list of rules that make up the set.
   */
  'rules'?: (_envoy_config_listener_v3_ListenerFilterChainMatchPredicate)[];
}

/**
 * A set of match configurations used for logical operations.
 */
export interface _envoy_config_listener_v3_ListenerFilterChainMatchPredicate_MatchSet__Output {
  /**
   * The list of rules that make up the set.
   */
  'rules': (_envoy_config_listener_v3_ListenerFilterChainMatchPredicate__Output)[];
}

/**
 * Listener filter chain match configuration. This is a recursive structure which allows complex
 * nested match configurations to be built using various logical operators.
 * 
 * Examples:
 * 
 * * Matches if the destination port is 3306.
 * 
 * .. code-block:: yaml
 * 
 * destination_port_range:
 * start: 3306
 * end: 3307
 * 
 * * Matches if the destination port is 3306 or 15000.
 * 
 * .. code-block:: yaml
 * 
 * or_match:
 * rules:
 * - destination_port_range:
 * start: 3306
 * end: 3307
 * - destination_port_range:
 * start: 15000
 * end: 15001
 * 
 * [#next-free-field: 6]
 */
export interface ListenerFilterChainMatchPredicate {
  /**
   * A set that describes a logical OR. If any member of the set matches, the match configuration
   * matches.
   */
  'or_match'?: (_envoy_config_listener_v3_ListenerFilterChainMatchPredicate_MatchSet | null);
  /**
   * A set that describes a logical AND. If all members of the set match, the match configuration
   * matches.
   */
  'and_match'?: (_envoy_config_listener_v3_ListenerFilterChainMatchPredicate_MatchSet | null);
  /**
   * A negation match. The match configuration will match if the negated match condition matches.
   */
  'not_match'?: (_envoy_config_listener_v3_ListenerFilterChainMatchPredicate | null);
  /**
   * The match configuration will always match.
   */
  'any_match'?: (boolean);
  /**
   * Match destination port. Particularly, the match evaluation must use the recovered local port if
   * the owning listener filter is after :ref:`an original_dst listener filter <config_listener_filters_original_dst>`.
   */
  'destination_port_range'?: (_envoy_type_v3_Int32Range | null);
  'rule'?: "or_match"|"and_match"|"not_match"|"any_match"|"destination_port_range";
}

/**
 * Listener filter chain match configuration. This is a recursive structure which allows complex
 * nested match configurations to be built using various logical operators.
 * 
 * Examples:
 * 
 * * Matches if the destination port is 3306.
 * 
 * .. code-block:: yaml
 * 
 * destination_port_range:
 * start: 3306
 * end: 3307
 * 
 * * Matches if the destination port is 3306 or 15000.
 * 
 * .. code-block:: yaml
 * 
 * or_match:
 * rules:
 * - destination_port_range:
 * start: 3306
 * end: 3307
 * - destination_port_range:
 * start: 15000
 * end: 15001
 * 
 * [#next-free-field: 6]
 */
export interface ListenerFilterChainMatchPredicate__Output {
  /**
   * A set that describes a logical OR. If any member of the set matches, the match configuration
   * matches.
   */
  'or_match'?: (_envoy_config_listener_v3_ListenerFilterChainMatchPredicate_MatchSet__Output | null);
  /**
   * A set that describes a logical AND. If all members of the set match, the match configuration
   * matches.
   */
  'and_match'?: (_envoy_config_listener_v3_ListenerFilterChainMatchPredicate_MatchSet__Output | null);
  /**
   * A negation match. The match configuration will match if the negated match condition matches.
   */
  'not_match'?: (_envoy_config_listener_v3_ListenerFilterChainMatchPredicate__Output | null);
  /**
   * The match configuration will always match.
   */
  'any_match'?: (boolean);
  /**
   * Match destination port. Particularly, the match evaluation must use the recovered local port if
   * the owning listener filter is after :ref:`an original_dst listener filter <config_listener_filters_original_dst>`.
   */
  'destination_port_range'?: (_envoy_type_v3_Int32Range__Output | null);
  'rule'?: "or_match"|"and_match"|"not_match"|"any_match"|"destination_port_range";
}
