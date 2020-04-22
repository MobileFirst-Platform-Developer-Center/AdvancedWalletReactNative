import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';

const Paragraph = ({ children }) => <Text style={styles.text}>{children}</Text>;
const ParagraphTitle = ({ children }) => <Text style={styles.header}>{children}</Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: theme.colors.secondary,
    textAlign: 'center',
    marginBottom: 14,
  },
  header: {
    fontSize: 26,
    color: theme.colors.primary,
    fontWeight: 'bold',
    textAlign: "center",
    // fontSize: 16,
    // lineHeight: 26,
    // color: theme.colors.secondary,
    // textAlign: 'center',
    marginBottom: 14,
  },
});

export default memo(Paragraph,ParagraphTitle);
